import Title from './Title';
import ContactCard from './ContactCard';
import Form from './Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Lorem Ipsum">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="stars" title="Excelent Services">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </ContactCard>
                    <ContactCard icon="insert_chart" title="Grow Your Market">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </ContactCard>
                    <ContactCard icon="launch" title="Launch Time">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
