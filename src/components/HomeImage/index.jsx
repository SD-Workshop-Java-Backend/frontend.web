export default async function HomeImage (){
    await new Promise((resolve) => setTimeout(resolve, 1500))

return(
    <div className=" h-screen w-3/4 py-5  max-md:hidden ">
        <img
          className="w-full h-full object-contain shrink  "
          src="/images/gradient.svg"
        />
      </div>
)
}