import Link from "next/link"

function GetStarted({ bgAndtxt = "bg-bright-red text-very-pale-red shadow-pink-200" }) {
  return (
    <>
    <div>
        <Link 
            className={`py-4 px-8 shadow-lg rounded-full font-semibold hover:opacity-60 ${ bgAndtxt }`}
            href="/"
        >
            <button>Get Started</button>
        </Link>
    </div>
    </>
  )
}

export default GetStarted