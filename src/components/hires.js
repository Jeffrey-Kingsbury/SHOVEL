import ToddlerSrc from "../img/baby.png";
import LocalTeenSrc from "../img/boy.png";
import SnowbaSrc from "../img/snoomba.png";
import MagicShovelSrc from "../img/shovel.png";
import WorkerSrc from "../img/worker.png";
import CityPlowSrc from "../img/snowplow.png";
import SidewalkPlowSrc from "../img/bulldozer.png";
import UfoSrc from "../img/ufo.png";
import BlackHoleSrc from "../img/black-hole.png";
import HellSrc from "../img/hell.png";
import DemonSrc from "../img/demon.png";


export const hires = [
    {
        toddler: {
            name: "Toddler",
            img: ToddlerSrc,
            tippy: "Comes with its own tiny plastic shovel! Normally it's used for sand, but we'll make it work.",
            price: 10,
            produce: 1,

            lock: (playerData) => {
                return false;
            }
        },
        localTeen: {
            name: "Local teen",
            img: LocalTeenSrc,
            tippy: "Has an attitude. But not for long.",
            price: 25,
            produce: 5,

            lock: (playerData, purchases) => {
                return purchases[0].toddler >= 5 ? false : true;
            }
        },
        snowba: {
            name: "Snowba",
            img: SnowbaSrc,
            tippy: '"You can\'t strap a shovel to a robot vacuum" they said. Who\'s laughing now?',
            price: 150,
            produce: 10,

            lock: (playerData) => {
                return playerData.lifetimeWallet >= 150 ? false : true;
            }
        },
        experiencedWorker: {
            name: "Experienced worker",
            img: WorkerSrc,
            tippy: "On \"loan\" from the city.",
            price: 250,
            produce: 50,

            lock: (playerData) => {
                return playerData.autoClicksLT > 100 ? false : true;
            }
        },
        sidewalkPlow: {
            name: "Sidewalk plow",
            img: SidewalkPlowSrc,
            tippy: 'The city wasn\'t using these anyways. Might as well put them to good use.',
            price: 1500,
            produce: 100,

            lock: (playerData) => {
                return true;
            }
        },
        cityPlow: {
            name: "City Plow",
            img: CityPlowSrc,
            tippy: "Borrowed from our local depot. Sure glad they left the door unlocked.",
            price: 5000,
            produce: 400,

            lock: (playerData) => {
                return true;
            }
        },
        magicShovel: {
            name: "Magic Shovel",
            img: MagicShovelSrc,
            tippy: 'It looks just like a normal shovel, but somehow shovels all by itself. It also speaks latin!',
            price: 10000,
            produce: 800,

            lock: (playerData) => {
                return true;
            }
        },
        ufo: {
            name: "UFO",
            img: UfoSrc,
            tippy: 'It seems that other planets are inderested in our snow. We can start exporting to the stars!',
            price: 400000,
            produce: 1800,

            lock: (playerData) => {
                return true;
            }
        },
        portableBlackHole: {
            name: "Portable black hole",
            img: BlackHoleSrc,
            tippy: 'CERN finally cracked the tech needed to create little black holes!',
            price: 1000000,
            produce: 5000,

            lock: (playerData) => {
                return true;
            }
        },
        gatewayToHell: {
            name: "Gateway to the underworld",
            img: HellSrc,
            tippy: 'Who needs shovels when you can Rip and Tear?',
            price: 6666666,
            produce: 66666,

            lock: (playerData) => {
                return true;
            }
        },
        otherworldlyCreature: {
            name: "Otherworldly creature",
            img: DemonSrc,
            tippy: 'Turns out breathing fire is a really big asset in this line of work.',
            price: 10000000,
            produce: 100000,

            lock: (playerData) => {
                return true;
            }
        }
    }
]