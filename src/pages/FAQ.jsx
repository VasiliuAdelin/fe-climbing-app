import H5 from "@material-tailwind/react/Heading5";
import DefaultNavbar from "../components/DefaultNavbar";
import Paragraph from "@material-tailwind/react/Paragraph";
import { Link } from "react-router-dom";
import CardHeader from "../components/shared/Card/CardHeader";
import CardBody from "../components/shared/Card/CardBody";
import CardFooter from "../components/shared/Card/CardFooter";
import Accordion from "../components/shared/Accordion/Accordion";

const mockFAQ = [
  {
    question: "How do I tie that?",
    answer: "Wish we would be able to tell you...",
  },
  {
    question: "How do I tie that?",
    answer: "Wish we would be able to tell you...",
  },
  {
    question: "How do I tie that?",
    answer: "Wish we would be able to tell you...",
  },
  {
    question: "How do I tie that?",
    answer: "Wish we would be able to tell you...",
  },
  {
    question: "How do I tie that?",
    answer: "Wish we would be able to tell you...",
  },
];

const RenderItem = ({ question, answer }) => (
  <Accordion
    title={question}
    containerClass="w-full p-3 border border-gray-100 rounded m-1"
    titleContainerClass="w-full p-4 border-l-2 border-green-500 text-lg"
  >
    <span>{answer}</span>
  </Accordion>
);

export default function FAQ() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-new-login-background bg-cover bg-center w-full h-screen md:h-screen relative flex flex-col justify-between">
        <DefaultNavbar />
        <form onSubmit={handleSubmit}>
          <div className="mx-auto my-8 md:my-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="w-full bg-white shadow-lg p-4 rounded">
              <CardHeader color="green" className="rounded-custom-shape">
                <H5 color="white" style={{ marginBottom: 0 }}>
                  Frequently Asked Questions
                </H5>
              </CardHeader>
              <CardBody className="w-full">
                {mockFAQ.map((item, index) => (
                  <RenderItem key={index} {...item} />
                ))}
              </CardBody>
              <CardFooter>
                <div className="p-0 m-0">
                  <Paragraph color="blueGray">
                    <Link
                      to="/forgot-password"
                      className="inline-block text-green-700 hover:text-green-900 p-0"
                    >
                      Ask a question
                    </Link>
                  </Paragraph>
                </div>
              </CardFooter>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
