import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';

export default function Form() {
    return (
        <div className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="gray">Lorem Ipsum</H3>
                            <Paragraph color="blueGray">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Paragraph>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="text"
                                    placeholder="Lorem Ipsum"
                                    color="green"
                                />
                                <Input
                                    type="email"
                                    placeholder="Lorem Ipsum"
                                    color="green"
                                />
                            </div>

                            <Textarea color="green" placeholder="Message" />

                            <div className="flex justify-center mt-10">
                                <Button color="green" ripple="light">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
