import React from 'react';
import Image from 'next/image';
import { faBluesky, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "@/public/images/erc-logo.png";
import Link from 'next/link';

const Zenodo =
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='h-10 mx-auto'>
            <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
            <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
        </svg>

export default function Footer() {
    return (
        <footer className='flex justify-center text-sm relative'>
            <div className="mt-2 pt-9">
                <hr className='pt-1' />
                <div className="mx-auto max-w-[1166px] px-4 xl:px-0">
                    <div 
                    className="
                        justify-between 
                        justify-center items-center 
                        grid gap-2 md:gap-4
                        grid-cols-1 md:grid-cols-3
                        divide-dashed 
                        divide-y
                        w-full mx-4
                        md:divide-x md:divide-y-0 lg:divide-x lg:divide-y-0
                    ">
                        <div 
                        id="footer-erc-boilerplate" 
                        className='w-auto max-h-25 mx-4'
                        >   
                            <div className='flex items-center md:items-start justify-center md:justify-left dark:bg-gray-600 dark:rounded-xl p-4'>
                                <Image className='object-contain w-[216px]' src={logo} alt='ERC & European Union logos' />
                            </div>
                            <p className="mt-[18px] text-[10px] font-normal md:text-[12px] my-0">
                                Funded by the European Research Council. Views and opinions expressed are however those of the author(s) only and not necessarily reflect those of the European Union or the European Research Council. Neither the European Union nor the granting authority can be held responsible for them.
                            </p>
                            <p className="mt-[18px] text-[10px] font-normal md:text-[12px] my-0">
                                Horizon Europe ERC Grant number: <a target="_blank" rel="noreferrer" href="https://doi.org/10.3030/101117408">101117408</a>
                            </p>
                        </div>
                        <div 
                        id="footer-site-map" 
                        className="
                            grid gap-4
                            pt-6 md:pt-0 md:pl-6
                            w-full
                        ">
                            <p 
                            className="font-inter text-[14px] font-medium leading-normal my-0 text-left"
                            >
                                Pages
                            </p>
                            <div
                            className="
                                justify-items-start
                                grid gap-2 md:gap-4 
                                grid-cols-3 md:grid-cols-2
                            ">
                                <Link href="/">
                                    <span
                                    className="font-inter text-[12px] font-normal text-left"
                                    >Home</span>
                                </Link>
                                <Link href="/corpus">
                                    <span
                                    className="font-inter text-[12px] font-normal text-left"
                                    >Corpus</span>
                                </Link>
                                <Link href="/events">
                                    <span
                                    className="font-inter text-[12px] font-normal text-left"
                                    >Events</span>
                                </Link>
                                <Link href="/publications">
                                    <span
                                    className="font-inter text-[12px] font-normal text-left"
                                    >Publications</span>
                                </Link>
                                <Link href="/releases">
                                    <span
                                    className="font-inter text-[12px] font-normal text-left"
                                    >Releases</span>
                                </Link>
                            </div>
                        </div>
                        <div 
                        id="footer-social"
                        className="
                            grid gap-2 md:gap-4
                            pt-6 md:pt-0 md:pl-6
                        ">
                            <p className="font-inter text-[14px] font-medium my-0">Follow Us</p>
                            <div
                            className="
                                mx-auto w-full max-w-4xl 
                                justify-center items-center 
                                grid gap-2 md:gap-4
                                grid-cols-2 md:grid-cols-4
                                text-[10px]
                            ">
                                <Link className='rounded-full' target="_blank" rel="noreferrer" href="https://bsky.app/profile/lostma.bsky.social">
                                    <span>
                                        <FontAwesomeIcon className='h-10 mx-auto' icon={faBluesky} /> Bluesky
                                    </span>
                                </Link>
                                {/* <Link className='rounded-full' target="_blank" rel="noreferrer" href="https://bsky.app/profile/lostma.bsky.social"> */}
                                <div className='flex justify-center'>
                                    <span>
                                        <FontAwesomeIcon className='h-10 mx-auto' icon={faLinkedin} /> LinkedIn
                                    </span>
                                </div>
                                {/* </Link> */}
                                <Link className='rounded-full' target="_blank" rel="noreferrer" href="https://github.com/LostMa-ERC">
                                    <span>
                                        <FontAwesomeIcon className='h-10 mx-auto' icon={faGithub} /> GitHub
                                    </span>
                                </Link>
                                {/* <Link className='rounded-full' target="_blank" rel="noreferrer" href="https://bsky.app/profile/lostma.bsky.social"> */}
                                <div className='flex justify-center'>
                                    <span>
                                        {Zenodo} Zenodo
                                    </span>
                                </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-[30px]" />
                <div className="flex flex-col items-center justify-center pb-4 pt-[9px] md:py-4">
                    <p className='my-0 text-[10px] font-normal md:text-[12px]'>Header image: <em>Romans aurthuriens</em>, Bibliothèque nationale de France, Français 95, folio 209v</p>
                    <p className='my-0 text-[10px] font-normal md:text-[12px]'>&copy; 2025 LostMa-ERC | All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

