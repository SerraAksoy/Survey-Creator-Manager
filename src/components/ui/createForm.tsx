'use client';
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface Option {
    id: number;
    text: string;
}

interface Question {
    id: number;
    text: string;
    type: "text" | "radio" | "checkbox";
    options: Option[];
}

const CreateForm = () => {
    const [questions, setQuestions] = useState<Question[]>([]);

    const addQuestion = () => {
        setQuestions([
            ...questions,
            { id: Date.now(), text: "", type: "text", options: [] },
        ]);
    };

    const removeQuestion = (id: number) => {
        setQuestions(questions.filter((q) => q.id !== id));
    };

    const updateQuestion = (
        id: number,
        field: keyof Omit<Question, "id">,
        value: string | Option[]
    ) => {
        setQuestions(
            questions.map((q) =>
                q.id === id ? { ...q, [field]: value } : q
            )
        );
    };

    const addOption = (id: number) => {
        setQuestions(
            questions.map((q) =>
                q.id === id
                    ? { ...q, options: [...q.options, { id: Date.now(), text: "" }] }
                    : q
            )
        );
    };

    const removeOption = (qId: number, oId: number) => {
        setQuestions(
            questions.map((q) =>
                q.id === qId
                    ? { ...q, options: q.options.filter((o) => o.id !== oId) }
                    : q
            )
        );
    };

    const updateOption = (qId: number, oId: number, value: string) => {
        setQuestions(
            questions.map((q) =>
                q.id === qId
                    ? {
                        ...q,
                        options: q.options.map((o) =>
                            o.id === oId ? { ...o, text: value } : o
                        ),
                    }
                    : q
            )
        );
    };

    const saveQuestions = () => {
        console.log("Kaydedilen Sorular:", questions);
    };

    return (
        <>
            <div className="w-[600px] relative h-300 justify-self-center">
                <Card className="w-[600px] relative h-300 justify-self-center">
                    <CardHeader>
                        <CardTitle className={"text-gray-600 text-center"}>Formunuzu Özelleştirin</CardTitle>
                        <CardDescription className={"text-gray-400 text-center"}>Sorularınızı ekleyin, seçeneklerinizi belirleyin ve formunuzu istediğiniz gibi şekillendirin.</CardDescription>
                    </CardHeader>
                    {questions.map((question, index) => (
                        <CardContent key={question.id}>
                            <h3 className="text-lg text-gray-600 font-bold mb-2">Soru {index + 1}</h3>
                            <Textarea
                                placeholder={"Sorunuzu yazın"}
                                onChange={(e) => updateQuestion(question.id, "text", e.target.value)}
                                style={{display: "block", width: "100%", marginBottom: "10px"}}
                            ></Textarea>
                            <Select value={question.type}
                                    onValueChange={(value) => updateQuestion(question.id, "type", value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Question Type</SelectLabel>
                                        <SelectItem value="text">Kısa Yanıt</SelectItem>
                                        <SelectItem value="radio">Çoktan Seçmeli</SelectItem>
                                        <SelectItem value="checkbox">Onay Kutuları</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {question.type === "text" && (
                                <div className="grid w-full gap-2">
                                    <Input className={"mt-5"} disabled type="text" placeholder="Kısa yanıt Alanı"/>
                                </div>
                            )}
                            {question.type === "radio" && (
                                <>
                                    <RadioGroup>
                                        {question.options.map((option) => (
                                            <div key={option.id} className="flex items-center space-x-3">
                                                <RadioGroupItem value={option.text}/>
                                                <Textarea
                                                    placeholder="Seçenek yazın"
                                                    value={option.text}
                                                    onChange={(e) => updateOption(question.id, option.id, e.target.value)}
                                                    className={"resize-none m-5"}
                                                />
                                                <Button
                                                    className="text-red-500"
                                                    variant="link"
                                                    onClick={() => removeOption(question.id, option.id)}
                                                >
                                                    Sil
                                                </Button>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    <Button
                                        className="bg-[#DD65B3] py-3 px-4 mr-1 rounded-md text-white hover:bg-[#DD65B3]"
                                        onClick={() => addOption(question.id)}
                                        style={{marginTop: "10px"}}
                                    >
                                        Seçenek Ekle
                                    </Button>
                                </>
                            )}

                            {question.type === "checkbox" && (
                                <>
                                    {question.options.map((option) => (
                                        <div key={option.id} className="flex items-center space-x-3">
                                            <Checkbox/>
                                            <Textarea
                                                placeholder="Seçenek yazın"
                                                value={option.text}
                                                onChange={(e) => updateOption(question.id, option.id, e.target.value)}
                                                className={"resize-none m-5"}
                                            />
                                            <Button
                                                className="text-red-500"
                                                variant="link"
                                                onClick={() => removeOption(question.id, option.id)}
                                            >
                                                Sil
                                            </Button>
                                        </div>
                                    ))}
                                    <Button
                                        className="bg-[#DD65B3] py-3 px-4 mr-1 rounded-md text-white hover:bg-[#DD65B3]"
                                        onClick={() => addOption(question.id)}
                                        style={{marginTop: "10px"}}
                                    >
                                        Seçenek Ekle
                                    </Button>
                                </>
                            )}

                            <Button
                                className="bg-[#FF914F] rounded-md text-white"
                                variant="link"
                                onClick={() => removeQuestion(question.id)}
                                style={{marginTop: "10px"}}
                            >
                                Soruyu Sil
                            </Button>
                        </CardContent>
                    ))}
                    <Button
                        className="bg-[#DD65B3] mx-6 mb-2 rounded-md text-white "
                        variant="link"
                        onClick={addQuestion}
                    >
                        Soru Ekle
                    </Button>

                    <CardFooter className={"text-gray-400 text-sm "}>
                        Değişiklikleri kaydetmek için Kaydet butonuna basmayı unutmayınız.
                    </CardFooter>
                </Card>
                <Button
                    className="bg-gradient-to-r from-[#DD65B3] to-[#FF914F] mt-2 rounded-md text-white relative float-end "
                    onClick={saveQuestions}
                >
                    Kaydet
                </Button>
            </div>
        </>
    );
};

export default CreateForm;
