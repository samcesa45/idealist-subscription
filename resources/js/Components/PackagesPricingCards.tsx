import { FeatureProps, PackageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

export default function PackagesPricingCards({
    packages,
    features,
}: {
    packages: PackageProps;
    features: FeatureProps;
}) {
    const { csrf_token } = usePage().props;

    return (
        <section className="bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center mb-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                        The more credits you choose the bigger savings you will
                        make.
                    </h2>
                </div>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {/* Pricing Card */}
                {packages?.data?.map((p) => (
                    <div
                        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8"
                        key={p.id}
                    >
                        <h3 className="mb-4 text-2xl font-semibold">
                            {p.name}
                        </h3>
                        <div>
                            <span className="mr-2 text-5xl font-extrabold">
                                ${p.price}
                            </span>
                            <span className="text-gray-500">
                                /{p.credits} credits
                            </span>
                        </div>
                        {/* LIST */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            {features.data.map((feature) => (
                                <li
                                    className="flex items-center space-x-3"
                                    key={feature.id}
                                >
                                    {/* ICON */}
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500 "
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span>{feature.name}</span>
                                </li>
                            ))}
                        </ul>
                        {/* END OF LIST */}
                        <form
                            action={route("credit.buy", p)}
                            method="post"
                            className="w-full"
                        >
                            <input
                                type="hidden"
                                name="_token"
                                value={csrf_token as string}
                                autoComplete="off"
                            />
                            <button className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Get Started
                            </button>
                        </form>
                    </div>
                ))}
                {/* Pricing Card  */}
            </div>
        </section>
    );
}
