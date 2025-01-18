import React from 'react';
import Image from 'next/image';
import { faBluesky, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ERC_LOGO from "@/public/images/erc-logo.png";
import Link from 'next/link';
import LOSTMA_LOGO from "@/public/images/lostma_logo.png";
import ENC_LOGO from "@/public/images/logo-enc.png";

const Zenodo =
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='h-10 mx-auto'>
            <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
            <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
        </svg>

export default function Footer() {
    return (
        <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
            <div className="flex space-x-12 mt-4">

                <div className="flex-none w-1/2 space-y-10 space-x-4 sm:space-y-8 lg:flex lg:space-y-0">
                    <div className="lg:flex-none lg:w-1/2">
                        <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                            Partners
                        </h2>
                        <ul className="mt-3 space-y-4">
                            <li>
                                <Image className='object-contain max-w-[200px]' src={ENC_LOGO} alt='ENC logo' />
                            </li>
                            <li>
                                <Image className='object-contain max-w-[200px]' src={ERC_LOGO} alt='ERC logo'/>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:flex-none lg:w-1/2">
                        <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                            ERC Starting Grant
                        </h2>
                        <ul className="mt-3 space-y-2">
                            <li className='text-xs'>
                                Horizon Europe ERC Grant number: <a target="_blank" rel="noreferrer" href="https://doi.org/10.3030/101117408">101117408</a>
                            </li>
                            <li className='text-xs'>
                                Funded by the European Research Council. Views and opinions expressed are however those of the author(s) only and not necessarily reflect those of the European Union or the European Research Council. Neither the European Union nor the granting authority can be held responsible for them.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
                    <div className="lg:flex-none lg:w-1/2">
                        <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                            Pages
                        </h2>
                        <ul className="mt-3 space-y-2 text-xs">
                            <li><Link href='/about'>About</Link></li>
                            <li><Link href='/about#team'>Team</Link></li>
                            <li><Link href='/corpus'>Corpus</Link></li>
                            <li><Link href='/corpus/documentation'>Data Model</Link></li>
                            <li><Link href='/publications'>Publications</Link></li>
                            <li><Link href='/releases'>Releases</Link></li>
                            <li><Link href='/about'>Events</Link></li>
                        </ul>
                    </div>
                    <div className="lg:flex-none lg:w-1/2">
                        <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                            Community
                        </h2>
                        <ul className="mt-3 space-y-2 text-xs">
                            <li><Link target="_blank" rel="noreferrer" href="https://bsky.app/profile/lostma.bsky.social">Bluesky</Link></li>
                            <li className='p-1'>LinkedIn</li>
                            <li><Link target="_blank" rel="noreferrer" href="https://github.com/LostMa-ERC">GitHub</Link></li>
                            <li className='p-1'>Zenodo</li>                              
                        </ul>
                    </div>
                </div>

            </div>
            
            <div className="flex mt-16 pt-10 gap-4">
                <Image className='flex-none w-fit h-[48px] object-contain' 
                    src={LOSTMA_LOGO} alt='LostMa logo' />
                <p className='grow my-0 text-[10px] font-normal md:text-[12px]'>
                    &copy; 2025 LostMa-ERC | All rights reserved.<br/>
                    Header image: <em>Romans aurthuriens</em>, Bibliothèque nationale de France, Français 95, folio 209v
                </p>
            </div>

        </div>
    )
}
