import Link from "next/link";
import { GetServerSideProps, NextPage } from "next";

interface Props {
    slug: string;
}

const BookingPage: NextPage<Props> = ({slug}) => {
    const links = ["https://calendly.com/enacwest/digital-strategy", "https://calendly.com/enacwest/digital-strategy-advanced"
        , "https://calendly.com/enacwest/market-expansion", "https://calendly.com/enacwest/market-expansion-advanced",
        "https://calendly.com/enacwest/life-coaching", "https://calendly.com/enacwest/life-coaching-advanced"
    ]
    console.log(links)

    return (
        <div>
            <h1 className="">Booking Page</h1>
            <Link href="/">
                <h1>Home {slug}</h1>
            </Link>
        </div>
    );
}

export default BookingPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.query;
    return {
        props: {
            slug,
        },
    };
}