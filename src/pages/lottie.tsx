import React, { useRef } from "react";

interface IntrinsicElements {
    "lottie-player": any;
}
const Test = (props: any) => {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <>
            <h1>Test {props.message}</h1>
            <div>
            <lottie-player
               id="firstLottie"
                ref={ref}
                autoplay
                controls
                loop
                mode="normal"
                src="https://assets4.lottiefiles.com/packages/lf20_gb5bmwlm.json"
                style={{ width: "300px", height: "300px" }}
                ></lottie-player>
            </div>
            

        </>
    )

}
export const getServerSideProps = (context: any) => {
    console.log("fetch env variables ---> ")
    console.log("fetch env variables ---> ", process.env.MESSAGE)
    return{

        props: { message: 'supp' },
        notFound: false
    }
}

export default Test;


