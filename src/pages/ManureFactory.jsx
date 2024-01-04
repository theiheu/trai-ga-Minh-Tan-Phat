const dataImgManureFactory = [
  [
    {
      srcImg: "/img/phanbon/7ff6e10e9cb534eb6da4.jpg",
    },
    {
      srcImg: "/img/phanbon/09d873eb0e50a60eff41.jpg",
    },
    {
      srcImg: "/img/phanbon/10fc22245f9ff7c1ae8e.jpg",
    },
    {
      srcImg: "/img/phanbon/20e0ff61a0d9088751c859.jpg",
    },
  ],
  [
    {
      srcImg: "/img/phanbon/374debccb4741c2a456561.jpg",
    },
    {
      srcImg: "/img/phanbon/588a84bffb04535a0a15.jpg",
    },
    {
      srcImg: "/img/phanbon/1643cfc2907a3824616b60.jpg",
    },
    {
      srcImg: "/img/phanbon/8240b13ccc8764d93d96.jpg",
    },
  ],
  [
    {
      srcImg: "/img/phanbon/99304ab11509bd57e41863.jpg",
    },
    {
      srcImg: "/img/phanbon/470247fa3b41931fca50.jpg",
    },
    {
      srcImg: "/img/phanbon/a5f872792dc1859fdcd062.jpg",
    },
    {
      srcImg: "/img/phanbon/b9347bae0615ae4bf704.jpg",
    },
  ],
  [
    {
      srcImg: "/img/phanbon/bb6475fe0845a01bf954.jpg",
    },
    {
      srcImg: "/img/phanbon/cd74db8ca7370f695626.jpg",
    },
    {
      srcImg: "/img/phanbon/f5b9fea882132a4d7302.jpg",
    },
    {
      srcImg: "/img/phanbon/7ff6e10e9cb534eb6da4.jpg",
    },
  ],
];

const ManureFactory = () => {
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
        {dataImgManureFactory.map((item, index) => (
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

export default ManureFactory;
