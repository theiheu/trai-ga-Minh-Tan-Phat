const dataImgArea5 = [
  [
    {
      srcImg: "/img/khu5/33dc9a1cf7525c0c054326.jpg",
    },
    {
      srcImg: "/img/khu5/99dfd96cb4221f7c463327.jpg",
    },
    {
      srcImg: "/img/khu5/3557da4cb6021d5c441324.jpg",
    },
    {
      srcImg: "/img/khu5/a6518c7be0354b6b122423.jpg",
    },
  ],
  [
    {
      srcImg: "/img/khu5/d646383c5472ff2ca66320.jpg",
    },
    {
      srcImg: "/img/khu5/e92152e13faf94f1cdbe25.jpg",
    },
    {
      srcImg: "/img/khu5/f00c2f34437ae824b16b22.jpg",
    },
    {
      srcImg: "/img/khu5/f001a097ccd967873ec821.jpg",
    },
  ],
];

const Area5 = () => {
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
        {dataImgArea5.map((item, index) => (
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

export default Area5;
