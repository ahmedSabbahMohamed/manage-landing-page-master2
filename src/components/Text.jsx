function Text({ number, heading, text }) {
  return (
    <>
    <div className="flex flex-col gap-5 justify-normal">

        <div className="flex flex-row gap-5">

            <div>
                <span className="hidden lg:inline-block bg-bright-red rounded-full px-8 py-3 text-very-pale-red font-bold text-lg mr-5">
                    {number}
                </span>
            </div>

        <div>
            <h3 className="text-very-dark-blue font-bold text-lg md:text-2xl mb-5 rounded-full bg-very-pale-red lg:bg-transparent">
                <span className="inline-block lg:hidden bg-bright-red rounded-full px-8 py-3 text-very-pale-red font-bold text-lg mr-5">
                    {number}
                </span>
                {heading}
            </h3>
            <p className="text-dark-gray-blue text-xl font-medium mb-5">
                {text}
            </p>
        </div>

        </div>

    </div>
    </>
  )
}

export default Text