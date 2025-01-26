import React from 'react';
import Image from 'next/image';
import ERC_LOGO from "@/public/images/erc-logo.png";
import Link from 'next/link';
import LOSTMA_LOGO from "@/public/images/lostma_logo.png";
import ENC_LOGO from "@/public/images/logo-enc.png";
import { faGithub, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <div className="overflow-hidden mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
            <div className="mx-8 lg:space-x-24 lg:flex mt-4 space-y-4 justify-center">

                <div className='grid grid-cols-2 space-x-12 place-items-stretch'>
                    <div className="w-fit">
                        <h2 className="font-semibold text-slate-900 mb-3">
                            Pages
                        </h2>
                        <ul className="space-y-2 text-xs">
                            <li><Link className='link' href='/about'>About</Link></li>
                            <li><Link className='link' href='/about#team'>Team</Link></li>
                            <li><Link className='link' href='/corpus'>Corpus</Link></li>
                            <li><Link className='link' href='/corpus/documentation'>Data Model</Link></li>
                            <li><Link className='link' href='/publications'>Publications</Link></li>
                            <li><Link className='link' href='/releases'>Releases</Link></li>
                            <li><Link className='link' href='/about'>Events</Link></li>
                        </ul>
                    </div>

                    <div className="w-fit">
                        <h2 className="font-semibold text-slate-900 mb-3">
                            Community
                        </h2>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <Link className='grid grid-cols-2 link justify-start items-center' target="_blank" rel="noreferrer" href="https://bsky.app/profile/lostma.bsky.social">
                                    <FontAwesomeIcon className='w-[18px]' icon={faBluesky} />
                                    Bluesky
                                </Link>
                            </li>
                            <li>
                                <div className='grid grid-cols-2 link justify-start items-center'>
                                    <FontAwesomeIcon className='w-[18px]' icon={faLinkedin} />
                                    LinkedIn
                                </div>
                            </li>
                            <li>
                                <Link className='grid grid-cols-2 link justify-start items-center' target="_blank" rel="noreferrer" href="https://github.com/LostMa-ERC">
                                    <FontAwesomeIcon className='w-[18px]' icon={faGithub} />
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-4 lg:space-x-4 place-items-stretch'>
                    <div className="md:max-w-96">
                        <h2 className="font-semibold text-slate-900 mb-3">
                            ERC Starting Grant
                        </h2>
                        <ul className="space-y-2 text-xs">
                            <li>
                                Horizon Europe ERC Grant number: <Link className='link' target="_blank" rel="noreferrer" href="https://doi.org/10.3030/101117408">101117408</Link>
                            </li>
                            <li>
                                Funded by the European Research Council. Views and opinions expressed are however those of the author(s) only and not necessarily reflect those of the European Union or the European Research Council. Neither the European Union nor the granting authority can be held responsible for them.
                            </li>
                        </ul>
                    </div>

                    <div className="grid min-w-96 justify-center">
                        <h2 className="font-semibold text-slate-900 mb-3">
                            Partners
                        </h2>
                        <ul className="grid lg:grid-cols-2 lg:flex gap-8 place-items-stretch max-h-[400px]">
                            <li>
                                <Link target="_blank" rel="noreferrer" href="https://doi.org/10.3030/101117408">
                                    <Image className='object-contain w-fit max-h-[100px]' src={ERC_LOGO} alt='ERC logo'/>
                                </Link>
                            </li>
                            <li>
                                <Link target="_blank" rel="noreferrer" href="https://www.chartes.psl.eu/">
                                        <Image className='object-contain w-fit' src={ENC_LOGO} alt='ENC logo' />
                                </Link>
                            </li>
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
