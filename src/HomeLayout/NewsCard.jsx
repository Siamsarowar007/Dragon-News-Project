import { FaEye, FaStar } from "react-icons/fa";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        total_view,
        rating,
    } = news;

    const formattedDate = new Date(author.published_date).toLocaleDateString();

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="flex justify-between bg-base-200 items-center gap-3 px-4 pt-4">
                <div className="flex gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <button className="text-accent flex justify-end hover:text-primary gap-2">
                    <CiBookmark size={20} />
                    <CiShare2 size={20} />
                </button>
            </div>

            <div className="px-4 py-2">
                <h2 className="card-title mt-2">{title}</h2>
            </div>

            <figure>
                <img src={thumbnail_url} alt="Thumbnail" className="w-full h-60 object-cover" />
            </figure>

            <div className="card-body px-4 text-sm">
                {details.length > 200 ? (
                    <p>
                        {details.slice(0, 200)}...<span className="font-semibold cursor-pointer hover:underline text-secondary">Read More
                        </span>
                    </p>
                ) : (
                    details
                )}

                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex items-center gap-2 text-orange-500">
                        <FaStar />
                        <span>{rating.number}</span>
                        <span className="badge badge-warning text-xs">{rating.badge}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
