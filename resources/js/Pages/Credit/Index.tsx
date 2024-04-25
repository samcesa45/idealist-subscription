import CreditsPricingCards from "@/Components/CreditsPricingCards";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FeatureProps, PackageProps, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({
    auth,
    packages,
    features,
    success,
    error,
}: {
    auth: PageProps;
    packages: PackageProps;
    features: FeatureProps;
    success: boolean;
    error: any;
}) {
    const availableCredits = auth?.auth?.user?.available_credits;
    console.log(packages);
    return (
        <AuthenticatedLayout
            user={auth.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Your Credits
                </h2>
            }
        >
            <Head title="Your Credits" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="rounded-lg bg-emerald-500 text-gray-100 p-3 mb-4">
                            {success}
                        </div>
                    )}
                    {error && (
                        <div className="rounded-lg bg-red-500 text-gray-100 p-3 mb-4">
                            {error}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg relative">
                        <div className="flex flex-col gap-3 items-center p-4">
                            <img
                                src="/img/coin.png"
                                alt=""
                                className="w-[100px]"
                            />
                            <h3 className="text-white text-2xl">
                                You have {availableCredits} credits.
                            </h3>
                        </div>
                    </div>
                    <CreditsPricingCards
                        packages={packages.data as any}
                        features={features.data as any}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
