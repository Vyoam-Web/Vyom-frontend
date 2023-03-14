import React from "react";
import { Carousel, Card, Avatar } from "flowbite-react";
import projectSkills from '../assets/projectSkills.png';
import writingSkills from '../assets/writingSkills.png';
import seminarSkills from '../assets/seminarSkills.png';
import modelSpeciality from '../assets/modelSpeciality.png';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';


function Featured() {
  return (
    <div>
      <hr className=" my-2 bg-black-900 border-4 text-black"/>
      <div>
        <h5 className="flex justify-center font-bold text-3xl my-9">
          Featured Courses
        </h5>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel slide={false} leftControl={<BsFillArrowLeftCircleFill className="text-4xl bg-blue"/>} rightControl={<BsFillArrowRightCircleFill className="text-4xl bg-blue"/> }>
          <div className="flex justify-evenly sm:h-64 xl:h-80 2xl:h-96">
            <div className="max-w-[17.5%]">
              <Card className="shadow-none border-none">
                
                <img
                  src={projectSkills}
                  alt=""
                  className=" rounded-lg max-w-[80%]"  
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Skills
                </h5>

                <div className="flex justify-start items-center">
                  <Avatar img="" rounded={true} />
                  <p className="ml-2 font-semibold">By ABC</p>
                </div>
                <div className="flex">
                  <p className="text-red-500 font-bold text-lg mr-2">FREE</p>
                  <p className="font-semibold text-gray-700 dark:text-gray-400 line-through">
                    INR: 2999/-
                  </p>
                </div>

                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                  >
                    Enroll
                  </button>
                  <p className="text-red-500 font-bold"> 5000+ enrolled</p>
                </div>
              </Card>
            </div>

            <div className="max-w-[18%]">
              <Card className="shadow-none border-none">
                <img
                  src={writingSkills}
                  alt=""
                  className="rounded-lg max-w-[80%]"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Writing Skills
                </h5>

                <div className="flex justify-start items-center">
                  <Avatar img="" rounded={true} />
                  <p className="ml-2 font-semibold">By ABC</p>
                </div>

                <p className="font-semibold text-gray-700 dark:text-gray-400">
                  INR: 2999/-
                </p>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                  >
                    Enroll
                  </button>
                  <p className="text-red-500 font-bold"> 5000+ enrolled</p>
                </div>
              </Card>
            </div>

            <div className="max-w-[18%]">
              <Card className="shadow-none border-none">
                <img
                  src={seminarSkills}
                  alt=""
                  className="rounded-lg max-w-[80%]"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Seminar Skills
                </h5>

                <div className="flex justify-start items-center">
                  <Avatar img="" rounded={true} />
                  <p className="ml-2 font-semibold">By ABC</p>
                </div>

                <p className="font-semibold text-gray-700 dark:text-gray-400">
                  INR: 2999/-
                </p>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                  >
                    Enroll
                  </button>
                  <p className="text-red-500 font-bold"> 5000+ enrolled</p>
                </div>
              </Card>
            </div>

            <div className="max-w-[18%]">
              <Card className="shadow-none border-none">
                <img
                  src={modelSpeciality}
                  alt=""
                  className="rounded-lg max-w-[80%]"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Model speciality
                </h5>

                <div className="flex justify-start items-center">
                  <Avatar img="" rounded={true} />
                  <p className="ml-2 font-semibold">By ABC</p>
                </div>

                <p className="font-semibold text-gray-700 dark:text-gray-400">
                  INR: 2999/-
                </p>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                  >
                    Enroll
                  </button>
                  <p className="text-red-500 font-bold"> 5000+ enrolled</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex justify-evenly ml-5" >
            <div className="max-w-[18%]">
              <Card className="shadow-none border-none">
                <img
                  src={projectSkills}
                  alt=""
                  className="rounded-lg max-w-[80%]"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Skills
                </h5>

                <div className="flex justify-start items-center">
                  <Avatar img="" rounded={true} />
                  <p className="ml-2 font-semibold">By ABC</p>
                </div>

                <p className="font-semibold text-gray-700 dark:text-gray-400">
                  INR: 2999/-
                </p>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                  >
                    Enroll
                  </button>
                  <p className="text-red-500 font-bold"> 5000+ enrolled</p>
                </div>
              </Card>
            </div>

            <div className="max-w-[18%]">
              <Card className="shadow-none border-none">
                <img
                  src={writingSkills}
                  alt=""
                  className="rounded-lg max-w-[80%]"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Writing Skills
                </h5>

                <div className="flex justify-start items-center">
                  <Avatar img="" rounded={true} />
                  <p className="ml-2 font-semibold">By ABC</p>
                </div>

                <p className="font-semibold text-gray-700 dark:text-gray-400">
                  INR: 2999/-
                </p>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                  >
                    Enroll
                  </button>
                  <p className="text-red-500 font-bold"> 5000+ enrolled</p>
                </div>
              </Card>
            </div>

            <div className="max-w-[18%]">
              <Card className="shadow-none border-none">
                <img
                  src={seminarSkills}
                  alt=""
                  className="rounded-lg max-w-[80%] "
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Seminar Skills
                </h5>

                <div className="flex justify-start items-center">
                  <Avatar img="" rounded={true} />
                  <p className="ml-2 font-semibold">By ABC</p>
                </div>

                <p className="font-semibold text-gray-700 dark:text-gray-400">
                  INR: 2999/-
                </p>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                  >
                    Enroll
                  </button>
                  <p className="text-red-500 font-bold"> 5000+ enrolled</p>
                </div>
              </Card>
            </div>

            <div className="max-w-[18%]">
              <Card className="shadow-none border-none">
                <img
                  src={modelSpeciality}
                  alt=""
                  className="rounded-lg max-w-[80%]"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Model speciality
                </h5>

                <div className="flex justify-start items-center">
                  <Avatar img="" rounded={true} />
                  <p className="ml-2 font-semibold">By ABC</p>
                </div>

                <p className="font-semibold text-gray-700 dark:text-gray-400">
                  INR: 2999/-
                </p>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                  >
                    Enroll
                  </button>
                  <p className="text-red-500 font-bold"> 5000+ enrolled</p>
                </div>
              </Card>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Featured;

// <div className="max-w-[18%]">
//         <Card className="shadow-none border-none">
//           <img
//             src="https://flowbite.com/docs/images/blog/image-1.jpg"
//             alt=""
//             className="rounded-lg"
//           />
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             Project Skills
//           </h5>

<div className="flex justify-start items-center">
  <Avatar img="" rounded={true} />
  <p className="ml-2 font-semibold">By ABC</p>
</div>;

//           <p className="font-semibold text-gray-700 dark:text-gray-400">
//             INR: 2999/-
//           </p>
//           <div className="flex items-center">
//             <button
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
//             >
//               Enroll
//             </button>za
//             <p className="text-red-500 font-bold"> 5000+ enrolled</p>
//           </div>
//         </Card>
//       </div>
