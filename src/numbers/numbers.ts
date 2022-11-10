import { Chapter, Class, Section, SubSection, ListNumber } from "./types"

type Chapters = {
    [key: number]: Chapter
}

const NumberList: Chapters = [
    {
        name: "Googological",
        classes: [
            {
                name: "Basic Numbers",
                sections: [
                    {
                        name: "Beginning",
                        subsections: [
                            {
                                name: "Pre-One",
                                listnumbers: [
                                    {
                                        word: "Zero",
                                        number: "0",
                                        symbols: [
                                            "milestone2"
                                        ]
                                    },
                                    {
                                        word: "Infinitesimal",
                                        number: "1/∞",
                                        symbols: []
                                    },
                                    {
                                        word: "Okojo-Ermine Number",
                                        number: "1 / {54, 55 [2] 2}",
                                        symbols: []
                                    },
                                    {
                                        word: "Googolplexianminex",
                                        number: "10^-(10^10^10^100)",
                                        symbols: []
                                    },
                                    {
                                        word: "Googolpleximinex",
                                        number: "10^(-10^10^100)",
                                        symbols: []
                                    },
                                    {
                                        word: "Googleminex",
                                        number: "10^-(10^100)",
                                        symbols: []
                                    },
                                    {
                                        word: "One Googol-Minutia-Speck",
                                        number: "10^-110",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "Googol-Minutia",
                                        number: "10^-100",
                                        symbols: []
                                    },
                                    {
                                        word: "Ogol-Minutia",
                                        number: "10^-80",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "Gogol-Minutia",
                                        number: "10^-50",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Goby-Minutia",
                                        number: "10^-35",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Decillionth",
                                        number: "10^-33",
                                        symbols: []
                                    },
                                    {
                                        word: "One Nonillionth",
                                        number: "10^-30",
                                        symbols: []
                                    },
                                    {
                                        word: "One Octillionth",
                                        number: "10^-27",
                                        symbols: []
                                    },
                                    {
                                        word: "One Minnow-Minutia",
                                        number: "10^-25",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Septillionth",
                                        number: "10^-24",
                                        symbols: []
                                    },
                                    {
                                        word: "One Sextillionth",
                                        number: "10^-21",
                                        symbols: []
                                    },
                                    {
                                        word: "One Guppy-Minutia",
                                        number: "10^-20",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Quintillionth",
                                        number: "10^-18",
                                        symbols: []
                                    },
                                    {
                                        word: "One Quadrillionth",
                                        number: "10^-15",
                                        symbols: []
                                    },
                                    {
                                        word: "One Trillionth",
                                        number: "10^-12",
                                        symbols: []
                                    },
                                    {
                                        word: "One Billionth",
                                        number: "10^-9",
                                        symbols: []
                                    },
                                    {
                                        word: "One Millionth",
                                        number: "10^-6",
                                        symbols: []
                                    },
                                    {
                                        word: "One Eyelashmite-Speck",
                                        number: "0.000002",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Dustmite-Speck",
                                        number: "0.000005",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Cheesemite-Speck",
                                        number: "0.000008",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Clovermite-Speck",
                                        number: "0.00002",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Thousandth",
                                        number: "0.001",
                                        symbols: []
                                    },
                                    {
                                        word: "One Hundredth",
                                        number: "0.01",
                                        symbols: []
                                    },
                                    {
                                        word: "One Fiftieth",
                                        number: "0.02",
                                        symbols: []
                                    },
                                    {
                                        word: "One Thirtieth",
                                        number: "0.0333333333-",
                                        symbols: []
                                    },
                                    {
                                        word: "One Tenth",
                                        number: "0.1",
                                        symbols: []
                                    },
                                    {
                                        word: "One Ninth",
                                        number: "0.1111111111-",
                                        symbols: []
                                    },
                                    {
                                        word: "One Eighth",
                                        number: "0.125",
                                        symbols: []
                                    },
                                    {
                                        word: "One Seventh",
                                        number: "0.1428571428-",
                                        symbols: []
                                    },
                                    {
                                        word: "One Sixth",
                                        number: "0.1666666666-",
                                        symbols: []
                                    },
                                    {
                                        word: "One Fifth",
                                        number: "0.2",
                                        symbols: []
                                    },
                                    {
                                        word: "One Quarter",
                                        number: "0.25",
                                        symbols: []
                                    },
                                    {
                                        word: "One Third",
                                        number: "0.3333333333-",
                                        symbols: []
                                    },
                                    {
                                        word: "Two Fifths",
                                        number: "0.4",
                                        symbols: []
                                    },
                                    {
                                        word: "One Half",
                                        number: "0.5",
                                        symbols: []
                                    },
                                    {
                                        word: "Euler-Mascheroni Constant (Γ)",
                                        number: "0.5772156649-",
                                        symbols: []
                                    },
                                    {
                                        word: "Three Fifths",
                                        number: "0.6",
                                        symbols: []
                                    },
                                    {
                                        word: "Two Thirds",
                                        number: "0.6666666666-",
                                        symbols: []
                                    },
                                    {
                                        word: "Four Quarters",
                                        number: "0.75",
                                        symbols: []
                                    },
                                    {
                                        word: "Four Fifths",
                                        number: "0.8",
                                        symbols: []
                                    },
                                    {
                                        word: "Nine Tenths",
                                        number: "0.9",
                                        symbols: []
                                    },
                                ]
                            },
                            {
                                name: "Simple Numbers",
                                listnumbers: [
                                    {
                                        word: "One",
                                        number: "1",
                                        symbols: [
                                            "milestone"
                                        ]
                                    },
                                    {
                                        word: "Square Root of Two",
                                        number: "1.4142135623-",
                                        symbols: []
                                    },
                                    {
                                        word: "Phi",
                                        number: "1.6180339887-",
                                        symbols: []
                                    },
                                    {
                                        word: "Two",
                                        number: "2",
                                        symbols: []
                                    },
                                    {
                                        word: "E",
                                        number: "2.7182818284-",
                                        symbols: []
                                    },
                                    {
                                        word: "Three",
                                        number: "3",
                                        symbols: []
                                    },
                                    {
                                        word: "Pi",
                                        number: "3.1415926535-",
                                        symbols: []
                                    },
                                    {
                                        word: "Four",
                                        number: "4",
                                        symbols: []
                                    },
                                    {
                                        word: "Five",
                                        number: "5",
                                        symbols: []
                                    },
                                    {
                                        word: "Six",
                                        number: "6",
                                        symbols: []
                                    },
                                    {
                                        word: "Tau",
                                        number: "6.2831853071-",
                                        symbols: []
                                    },
                                    {
                                        word: "Seven",
                                        number: "7",
                                        symbols: []
                                    },
                                    {
                                        word: "Eight",
                                        number: "8",
                                        symbols: []
                                    },
                                    {
                                        word: "Nine",
                                        number: "9",
                                        symbols: []
                                    },
                                    {
                                        word: "Ten",
                                        number: "10",
                                        symbols: [
                                            "featured"
                                        ]
                                    },
                                    {
                                        word: "Eleven",
                                        number: "11",
                                        symbols: []
                                    },
                                    {
                                        word: "Twelve",
                                        number: "12",
                                        symbols: []
                                    },
                                    {
                                        word: "Thirteen",
                                        number: "13",
                                        symbols: []
                                    },
                                    {
                                        word: "Fourteen",
                                        number: "14",
                                        symbols: []
                                    },
                                    {
                                        word: "Fifteen",
                                        number: "15",
                                        symbols: []
                                    },
                                    {
                                        word: "Sixteen",
                                        number: "16",
                                        symbols: []
                                    },
                                    {
                                        word: "Seventeen",
                                        number: "17",
                                        symbols: []
                                    },
                                    {
                                        word: "Eighteen",
                                        number: "18",
                                        symbols: []
                                    },
                                    {
                                        word: "Nineteen",
                                        number: "19",
                                        symbols: []
                                    },
                                    {
                                        word: "Twenty",
                                        number: "20",
                                        symbols: []
                                    },
                                    {
                                        word: "Twenty-One",
                                        number: "21",
                                        symbols: []
                                    },
                                    {
                                        word: "Twenty-Two",
                                        number: "22",
                                        symbols: []
                                    },
                                    {
                                        word: "Twenty-Three",
                                        number: "23",
                                        symbols: []
                                    },
                                    {
                                        word: "Twenty-Four",
                                        number: "24",
                                        symbols: []
                                    },
                                    {
                                        word: "Twenty-Five",
                                        number: "25",
                                        symbols: []
                                    },
                                    {
                                        word: "Thirty",
                                        number: "30",
                                        symbols: []
                                    },
                                    {
                                        word: "Fourty",
                                        number: "40",
                                        symbols: []
                                    },
                                    {
                                        word: "Fifty",
                                        number: "50",
                                        symbols: []
                                    },
                                    {
                                        word: "Sixty",
                                        number: "60",
                                        symbols: []
                                    },
                                    {
                                        word: "Seventy",
                                        number: "70",
                                        symbols: []
                                    },
                                    {
                                        word: "Eighty",
                                        number: "80",
                                        symbols: []
                                    },
                                    {
                                        word: "Ninety",
                                        number: "90",
                                        symbols: []
                                    },
                                    {
                                        word: "Ninety-Nine",
                                        number: "99",
                                        symbols: []
                                    },
                                    {
                                        word: "One Hundred",
                                        number: "100",
                                        symbols: [
                                            "featured"
                                        ]
                                    }
                                ]
                            },
                            {
                                name: "Advanced Numbers",
                                listnumbers: [
                                    {
                                        word: "Two Hundred",
                                        number: "200",
                                        symbols: []
                                    },
                                    {
                                        word: "Five Hundred",
                                        number: "500",
                                        symbols: []
                                    },
                                    {
                                        word: "Devil's Number",
                                        number: "666",
                                        symbols: []
                                    },
                                    {
                                        word: "One Thousand",
                                        number: "1,000",
                                        symbols: [
                                            "featured",
                                        ]
                                    },
                                    {
                                        word: "Two Thousand Fourty-Eight",
                                        number: "2,048",
                                        symbols: []
                                    },
                                    {
                                        word: "One Myriad",
                                        number: "10,000",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Lakh",
                                        number: "100,000",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Million",
                                        number: "1,000,000",
                                        symbols: [
                                            "featured"
                                        ]
                                    },
                                    {
                                        word: "One Crore",
                                        number: "10,000,000",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Myllion",
                                        number: "100,000,000",
                                        symbols: []
                                    },
                                    {
                                        word: "One Billion",
                                        number: "1,000,000,000",
                                        symbols: [
                                            "featured"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Post-illions",
                        subsections: [
                            {
                                name: "Intermediate -illions",
                                listnumbers: [
                                    {
                                        word: "One Dialogue",
                                        number: "10,000,000,000",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Trillion",
                                        number: "1,000,000,000,000",
                                        symbols: []
                                    },
                                    {
                                        word: "One Quadrillion",
                                        number: "10^15",
                                        symbols: []
                                    },
                                    {
                                        word: "One Byllion",
                                        number: "10^16",
                                        symbols: []
                                    },
                                    {
                                        word: "One Quintillion",
                                        number: "10^18",
                                        symbols: []
                                    },
                                    {
                                        word: "One Guppy",
                                        number: "10^20",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Sextillion",
                                        number: "10^21",
                                        symbols: []
                                    },
                                    {
                                        word: "One Septillion",
                                        number: "10^24",
                                        symbols: []
                                    },
                                    {
                                        word: "One Octillion",
                                        number: "10^27",
                                        symbols: []
                                    },
                                    {
                                        word: "One Nonillion",
                                        number: "10^30",
                                        symbols: []
                                    },
                                    {
                                        word: "One Tryllion",
                                        number: "10^32",
                                        symbols: []
                                    },
                                    {
                                        word: "One Decillion",
                                        number: "10^33",
                                        symbols: [
                                            "featured"
                                        ]
                                    },
                                    {
                                        word: "One Undecillion",
                                        number: "10^36",
                                        symbols: []
                                    },
                                    {
                                        word: "One Duodecillion",
                                        number: "10^39",
                                        symbols: []
                                    },
                                    {
                                        word: "One Tredecillion",
                                        number: "10^42",
                                        symbols: []
                                    },
                                    {
                                        word: "One Quattuordecillion",
                                        number: "10^45",
                                        symbols: []
                                    },
                                    {
                                        word: "One Quindecillion",
                                        number: "10^48",
                                        symbols: []
                                    },
                                    {
                                        word: "Gogol",
                                        number: "10^50",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Sexdecillion",
                                        number: "10^51",
                                        symbols: []
                                    },
                                    {
                                        word: "One Septendecillion",
                                        number: "10^54",
                                        symbols: []
                                    },
                                    {
                                        word: "One Octodecillion",
                                        number: "10^57",
                                        symbols: []
                                    },
                                    {
                                        word: "One Novemdecillion",
                                        number: "10^60",
                                        symbols: []
                                    },
                                    {
                                        word: "One Vigintillion",
                                        number: "10^63",
                                        symbols: [
                                            "featured"
                                        ]
                                    },
                                    {
                                        word: "One Quadryllion",
                                        number: "10^64",
                                        symbols: []
                                    },
                                    {
                                        word: "One Unvigintillion",
                                        number: "10^66",
                                        symbols: []
                                    },
                                    {
                                        word: "One Duovigintillion",
                                        number: "10^69",
                                        symbols: []
                                    },
                                    {
                                        word: "One Trevigintillion",
                                        number: "10^72",
                                        symbols: []
                                    },
                                    {
                                        word: "One Quattuorvigintillion",
                                        number: "10^75",
                                        symbols: []
                                    },
                                    {
                                        word: "One Quinvigintillion",
                                        number: "10^78",
                                        symbols: []
                                    },
                                    {
                                        word: "Ogol",
                                        number: "10^80",
                                        symbols: [
                                            "notknown"
                                        ]
                                    },
                                    {
                                        word: "One Sexvigintillion",
                                        number: "10^81",
                                        symbols: []
                                    },
                                    {
                                        word: "One Septemvigintillion",
                                        number: "10^84",
                                        symbols: []
                                    },
                                    {
                                        word: "One Octovigintillion",
                                        number: "10^87",
                                        symbols: []
                                    },
                                    {
                                        word: "One Novemvigintillion",
                                        number: "10^90",
                                        symbols: []
                                    },
                                    {
                                        word: "One Trigintillion",
                                        number: "10^93",
                                        symbols: []
                                    },
                                    {
                                        word: "Googol",
                                        number: "10^100",
                                        symbols: [
                                            "featured"
                                        ]
                                    },
                                    {
                                        word: "Googolty",
                                        number: "10^101",
                                        symbols: []
                                    },
                                    {
                                        word: "Centillion",
                                        number: "10^303",
                                        symbols: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export {NumberList}
