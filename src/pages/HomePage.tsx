import landing from "../assets/landing.png";
import download from "../assets/appDownload.png";
const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-amber-900">
                starch your day with potato
            </h1>
            <span className="text-xl">what are we eating today?</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landing} alt="hungry?" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    order takeaway even faster with potato
                </span>
                <span>
                    potato app coming soon to app store and playstore!
                </span>
                <img src={download} alt="download stores" />
            </div>
        </div>
    </div>
  )
}

export default HomePage;