<div className="wrapper">

                        <div className="mt-8">
                            <h3 className="heading-3 font-semibold">Product Description</h3>
                            <p className='leading-loose text-[18px] text-neutral-600'>{product.description || ""}</p>
                        </div>

                        {/* more details */}
                        <div className="mt-10">
                            {product.features?.length > 0 && <h3 className="heading-3 font-semibold">More Details</h3>}
                            {/* options */}

                            <div className="grid grid-cols-12 mt-7 gap-4">
                                {product.features?.map((feature, i) => (

                                    <div key={i} className="flex gap-4 col-span-12 md:col-span-6">
                                        <span className='h-7 w-7 rounded-full bg-white flex items-center justify-center'>
                                            <i className="fa fa-check text-blue-700"></i>
                                        </span>
                                        <p className="font-medium">{feature}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>