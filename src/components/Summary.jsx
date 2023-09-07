import GetStarted from "./GetStarted"

function Summary() {
  return (
    <>
    <section className='bg-bright-red py-16'>

        {/* content */}
        <div className="container mx-auto">
            <div className="flex justify-between items-center flex-col md:flex-row gap-16">
                {/* col one */}
                <div className="flex-1">
                    <h3 className="text-very-pale-red text-[3rem] font-bold text-center md:text-left">
                        Simplify how your team works today.
                    </h3>
                </div>
                {/* col two */}
                <div className="flex-1 text-right">
                    <GetStarted bgAndtxt="bg-very-pale-red text-bright-red" />
                </div>
            </div>
        </div>

    </section>
    </>

    )
}

export default Summary