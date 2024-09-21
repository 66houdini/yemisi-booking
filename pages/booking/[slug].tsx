import Link from "next/link";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
    slug: string;
}

const BookingPage: NextPage<Props> = ({slug}) => {
    
    

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