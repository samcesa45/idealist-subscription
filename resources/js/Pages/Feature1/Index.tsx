import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import Feature from "@/Components/Feature";
import { FeatureProps } from "@/types";

export default function Index({
    feature,
    answer,
}: {
    feature: FeatureProps;
    answer: number;
}) {
    const { data, setData, post, reset, errors, processing } = useForm({
        number1: "",
        number2: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("feature1.calculate"), {
            onSuccess() {
                reset();
            },
        });
    };
    return (
        <Feature feature={feature} answer={answer}>
            <form onSubmit={submit} className="p-8 grid grid-cols-2 gap-3">
                <div>
                    <InputLabel
                        htmlFor="number1"
                        value="Number 1"
                        className="dark:text-gray-200"
                    />
                    <TextInput
                        id="number1"
                        type="text"
                        name="number1"
                        value={data.number1}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("number1", e.target.value)}
                    />
                    <InputError message={errors.number1} className="mt-2" />
                </div>
                <div>
                    <InputLabel
                        htmlFor="number2"
                        value="Number 2"
                        className="dark:text-gray-200"
                    />
                    <TextInput
                        id="number2"
                        type="text"
                        name="number2"
                        value={data.number2}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("number2", e.target.value)}
                    />
                    <InputError message={errors.number2} className="mt-2" />
                </div>
                <div className="flex items-center justify-end mt-4 col-span-2">
                    <PrimaryButton
                        className="ms-4 dark:bg-gray-200 dark:text-black"
                        aria-disabled={processing}
                    >
                        Calculate
                    </PrimaryButton>
                </div>
            </form>
        </Feature>
    );
}
