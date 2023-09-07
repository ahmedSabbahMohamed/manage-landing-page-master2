import Image from "next/image"

function ReviewCard({ avatar, name, textReview }) {

  return (
    <div className={`w-full px-2 md:w-[40%] flex-shrink-0`}>
      <div className="relative bg-very-light-gray p-10 rounded-lg">

          {/* image */}
          <Image className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20" src={  avatar } alt="avatar" />

          {/* review */}
          <div className="">
              <h3 className="text-very-dark-blue font-bold text-2xl text-center my-5">
                  {name}
              </h3>
              <p className="text-dark-gray-blue text-center font-semibold text-xl leading-[1.5]">
                  {textReview}
              </p>
          </div>

      </div>
    </div>
  )
}

export default ReviewCard