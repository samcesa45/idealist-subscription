import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { PageProps, UsedFeatureProps } from "@/types";

export default function Index(props: {
    auth: PageProps;
    usedFeatures: UsedFeatureProps;
}) {
    const { auth, usedFeatures } = props;

    return (
        <AuthenticatedLayout
            user={auth?.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Feature
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Credits
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Additional Data
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usedFeatures?.data?.map((usedfeature) => (
                                        <tr
                                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-grya-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                            key={usedfeature.id}
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {usedfeature?.feature?.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {usedfeature.credits}
                                            </td>
                                            <td className="px-6 py-4">
                                                {usedfeature.created_at}
                                            </td>
                                            <td className="px-6 py-4">
                                                {JSON.stringify(
                                                    usedfeature.data
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    {!usedFeatures?.data?.length && (
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="text-center p-8"
                                            >
                                                You have not used any features
                                                yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
