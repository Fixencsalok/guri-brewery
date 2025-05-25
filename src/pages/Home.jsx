import React from "react";

const Home = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      {/* főcím */}
      <h1 className="text-4xl font-bold mb-4">Üdvözlünk a Guri Sörfőzdében!</h1>

      {/* bevezető */}
      <p className="text-lg text-gray-700 mb-6">
        Kézműves sörök szívvel-lélekkel, hagyományos technológiával és újhullámos ízvilággal.
      </p>

      {/* leírás */}
      <p className="text-md text-gray-600 leading-relaxed">
        A Guri Sörfőzde célja, hogy ötvözze a tradicionális német sörfőzési eljárásokat
        a modern ízekkel és egyedi gyümölcsös variációkkal. Kínálatunkban megtalálható
        a klasszikus pilseni éppúgy, mint a fanyar gyümölcsös sörök vagy a testes porter.
        <br /><br />
        Fedezd fel a kínálatunkat, és találd meg a kedvenc sörödet!
      </p>
    </div>
  );
};

export default Home;
