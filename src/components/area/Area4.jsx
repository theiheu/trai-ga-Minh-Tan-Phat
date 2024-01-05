const dataImgArea4 = [
  [
    {
      srcImg: "/img/khu4/0fccbe03cf4d64133d5c10.jpg",
    },
    {
      srcImg: "/img/khu4/1ad92c9d5cd3f78daec24.jpg",
    },
    {
      srcImg: "/img/khu4/1dce6100104ebb10e25f6.jpg",
    },
    {
      srcImg: "/img/khu4/01f8ba0ad6447d1a245517.jpg",
    },
  ],
  [
    {
      srcImg: "/img/khu4/4dbfcc0fbc41171f4e507.jpg",
    },
    {
      srcImg: "/img/khu4/8ad361e80ea6a5f8fcb713.jpg",
    },
    {
      srcImg: "/img/khu4/40f771161d58b606ef4916.jpg",
    },
    {
      srcImg: "/img/khu4/49d5ee8380cd2b9372dc11.jpg",
    },
  ],
  [
    {
      srcImg: "/img/khu4/070fecb580fb2ba572ea3.jpg",
    },
    {
      srcImg: "/img/khu4/6171b990c8de63803acf8.jpg",
    },
    {
      srcImg: "/img/khu4/70328ce8e0a64bf812b719.jpg",
    },
    {
      srcImg: "/img/khu4/a08fffb790f93ba762e812.jpg",
    },
  ],
  [
    {
      srcImg: "/img/khu4/ac063ef252bcf9e2a0ad18.jpg",
    },
    {
      srcImg: "/img/khu4/b57d375f4511ee4fb7001.jpg",
    },
    {
      srcImg: "/img/khu4/c6c79be7e8a943f71ab82.jpg",
    },
    {
      srcImg: "/img/khu4/cbf9ad34dc7a77242e6b5.jpg",
    },
  ],
  [
    {
      srcImg: "/img/khu4/cec26cdd0393a8cdf18215.jpg",
    },
    {
      srcImg: "/img/khu4/e74641102f5e8400dd4f14.jpg",
    },
    {
      srcImg: "/img/khu4/c6c79be7e8a943f71ab82.jpg",
    },
    {
      srcImg: "/img/khu4/cbf9ad34dc7a77242e6b5.jpg",
    },
  ],
];

const Area4 = () => {
  return (
    <div className="p-2">
      <div className="w-full my-6 ">
        <h1 className="flex items-center text-5xl font-extrabold dark:text-white">
          Xưởng phân
          <span className="bg-amber-100 text-amber-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded ms-2 my-2">
            1
          </span>
        </h1>

        <div className="h-1 w-20 bg-yellow-500 rounded" />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {dataImgArea4.map((item, index) => (
          <div className="grid gap-4" key={index}>
            {item.map((item, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={item.srcImg}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Area4;
