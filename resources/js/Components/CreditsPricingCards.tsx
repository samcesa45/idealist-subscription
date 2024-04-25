import { FeatureProps, PackageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

export default function CreditsPricingCards({
    packages,
    features,
}: {
    packages: PackageProps;
    features: FeatureProps;
}) {
    const { csrf_token } = usePage().props;
    return (
        <section className="bg-gray-900 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center mb-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        The more credits you choose the bigger savings you will
                        make.
                    </h2>
                </div>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {/* Pricing Card */}
                {packages.data.map(({ id, name, price, credits }) => (
                    <div
                        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
                        key={id}
                    >
                        <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
                        <div>
                            <span className="mr-2 text-5xl font-extrabold">
                                ${price}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                                /{credits} credits
                            </span>
                        </div>
                        {/* LIST */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            {features.data.map(
                                ({
                                    id,
                                    name,
                                    description,
                                    required_credits,
                                }) => (
                                    <li
                                        className="flex items-center space-x-3"
                                        key={id}
                                    >
                                        {/* ICON */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span>{name}</span>
                                    </li>
                                )
                            )}
                        </ul>
                        {/* END OF LIST */}
                        <form
                            action={route("credit.buy", id)}
                            method="post"
                            className="w-full"
                        >
                            <input
                                type="hidden"
                                name="_token"
                                value={csrf_token}
                                autoComplete="off"
                            />
                            <PrimaryButton className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">
                                Get Started
                            </PrimaryButton>
                        </form>
                    </div>
                ))}
                {/* Pricing Card  */}
            </div>
        </section>
    );
}
