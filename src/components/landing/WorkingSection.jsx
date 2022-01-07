import CardImage from "@material-tailwind/react/CardImage";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "./StatusCard";
import Teamwork from "../../assets/img/teamwork.jpeg";
import Card from "../shared/Card/Card";
import CardBody from "../shared/Card/CardBody";

export default function WorkingSection() {
  return (
    <section className="pb-20 bg-gray-100 pt-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="stars" title="Timesheets Management">
            Neque porro quisquam
          </StatusCard>
          <StatusCard
            color="lightBlue"
            icon="autorenew"
            title="Requests Manageent"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </StatusCard>
          <StatusCard color="teal" icon="fingerprint" title="Company overview">
            Lorem Ipsum is
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="flex justify-center items-center">
              <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white mr-4">
                <Icon name="people" size="3xl" />
              </div>
              <H4 color="gray">Lorem Ipsum is simply</H4>
            </div>
            <LeadText color="blueGray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </LeadText>
            <LeadText color="blueGray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </LeadText>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card >
              <CardImage alt="Card Image" src={Teamwork} />
              <CardBody>
                <H6 color="gray">Lorem Ipsum is simply dummy </H6>
                <Paragraph color="blueGray">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
