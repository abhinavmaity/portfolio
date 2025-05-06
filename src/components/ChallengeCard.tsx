import React from "react";

interface ChallengeCardProps {
  number: number;
  challenge: string;
  solution: string;
  image?: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  number,
  challenge,
  solution,
  image,
}) => {
  return (
    <div className="glass-card p-4 h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
            {number}
          </div>
          <h3 className="text-sm font-medium text-primary">
            Challenge {number}
          </h3>
        </div>

        <div className="flex-grow">
          <p className="text-gray-300 text-sm mb-3">{challenge}</p>

          <div className="flex items-center gap-2 text-primary/60 mb-3">
            <span className="h-px flex-1 bg-primary/10" />
            <span className="text-xs">Solution</span>
            <span className="h-px flex-1 bg-primary/10" />
          </div>

          <p className="text-gray-300 text-sm mb-3">{solution}</p>
        </div>

        {image && (
          <div className="mt-auto rounded-lg overflow-hidden">
            <img
              src={image}
              alt={`Solution for challenge ${number}`}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard;
