const dataImgArea2 = [
  [
    {
      srcImg: ".. /img/khu2/0b15c9ed79b1d2ef8ba06.jpg",
    },
    {
      srcImg: ".. /img/khu2/80654b9dfbc1509f09d03.jpg",
    },
    {
      srcImg: ".. /img/khu2/411178e9c8b563eb3aa42.jpg",
    },
    {
      srcImg: ".. /img/khu2/a4949b8b28d78389dac61.jpg",
    },
  ],
  [
    {
      srcImg: ".. /img/khu2/b90406f5b6a91df744b85.jpg",
    },
    {
      srcImg: ".. /img/khu2/c6338dc33d9f96c1cf8e4.jpg",
    },
  ],
];

const Area2 = () => {
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
        {dataImgArea2.map((item, index) => (
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

export default Area2;
