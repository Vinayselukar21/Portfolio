import Layout from "./Layout";
import Lottie from "lottie-react";
import Codeanimation from  "../../public/Animations/about-sec-lottie.json"

const Skills=()=>{
    return<>
    <Layout>
        <div className="flex flex-col sm:flex-row w-full">
            <div className="w-full sm:w-1/2 flex justify-center">
                <Lottie className="w-1/2" animationData={Codeanimation} loop={true} />
            </div>
            <div className="w-full sm:w-1/2">
                <h1 className="text-3xl sm:text-5xl font-black mb-3 text-gray-600">What i do.</h1>
                <p className="text-xl w-4/5 mb-3 text-gray-500">A web developer specializing in frontend and making responsive web designs.</p>
            </div>
        </div>
    </Layout>
    </>
}
export default Skills;