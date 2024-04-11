const Footer = () => {
  return(
    <div className="bg-amber-700 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
                potato
            </span>
            <span className="text-3xl text-white font-bold tracking-tight flex gap-4">
                {/* <span>privacy policy</span> */}
                <span>developed by fenrir</span>
            </span>
        </div>
    </div>
  )
}

export default Footer;