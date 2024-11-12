import Image from 'next/image';

const countries = [
    { name: "USA", flag: "https://www.worldometers.info/img/flags/small/tn_us-flag.gif" },
    { name: "India", flag: "https://www.worldometers.info/img/flags/small/tn_in-flag.gif" },
    { name: "Germany", flag: "https://www.worldometers.info/img/flags/small/tn_gm-flag.gif" },
    { name: "Australia", flag: "https://www.worldometers.info/img/flags/small/tn_as-flag.gif" },
    { name: "UK", flag: "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif" },
    { name: "Canada", flag: "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif" },
    { name: "France", flag: "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif" },
    { name: "Italy", flag: "https://www.worldometers.info/img/flags/small/tn_it-flag.gif" },
    { name: "Japan", flag: "https://www.worldometers.info/img/flags/small/tn_ja-flag.gif" },
    { name: "China", flag: "https://www.worldometers.info/img/flags/small/tn_ch-flag.gif" },
    { name: "Brazil", flag: "https://www.worldometers.info/img/flags/small/tn_br-flag.gif" },
    { name: "South Korea", flag: "https://www.worldometers.info/img/flags/small/tn_sk-flag.gif" },
    { name: "Mexico", flag: "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif" },
    { name: "Spain", flag: "https://www.worldometers.info/img/flags/small/tn_sp-flag.gif" },
    { name: "Russia", flag: "https://www.worldometers.info/img/flags/small/tn_rs-flag.gif" },
    { name: "South Africa", flag: "https://www.worldometers.info/img/flags/small/tn_sa-flag.gif" },
    { name: "Argentina", flag: "https://www.worldometers.info/img/flags/small/tn_ag-flag.gif" },
    { name: "Sweden", flag: "https://www.worldometers.info/img/flags/small/tn_sw-flag.gif" },
    { name: "Egypt", flag: "https://www.worldometers.info/img/flags/small/tn_eg-flag.gif" },
    { name: "Netherlands", flag: "https://www.worldometers.info/img/flags/small/tn_ne-flag.gif" },
    { name: "Singapore", flag: "https://www.worldometers.info/img/flags/small/tn_sg-flag.gif" },
    { name: "Thailand", flag: "https://www.worldometers.info/img/flags/small/tn_th-flag.gif" },
    { name: "Norway", flag: "https://www.worldometers.info/img/flags/small/tn_no-flag.gif" },
    { name: "Poland", flag: "https://www.worldometers.info/img/flags/small/tn_pl-flag.gif" },
    // { name: "Turkey", flag: "https://www.worldometers.info/img/flags/small/tn_tu-flag.gif" }
];

const CountrySelection = () => {
    return (
        <div className="mt-4">
            <div className="text-lg font-semibold text-gray-800 mb-4">Available Countries</div>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="relative flex justify-center items-center cursor-pointer group"
                    >
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                                src={country.flag}
                                alt={country.name}
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg transform scale-0 group-hover:scale-100 transition-all duration-200 text-center">
                            {country.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountrySelection;
