'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center animate mb-2 mt-3">
      <div className="relative h-60 w-60 md:h-60 md:w-96 mt-10">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute h-60 w-60 md:h-60 md:w-96 rounded-lg p-4 shadow-xl flex flex-col justify-between bg-white dark:bg-[#18181b] border-2 border-gray-300 dark:border-gray-600"
              style={{
                transformOrigin: 'top center',
                backgroundImage: 'url(/images/back.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
            >
              <div className="font-light text-neutral-700 dark:text-neutral-200 py-1">
                {card.content}
              </div>
              <div>
                <p className="text-neutral-500 font-light dark:text-neutral-400 flex items-center gap-1">
                  {card.name}{' '}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.4646 1.57493C7.75053 0.955033 8.63155 0.955034 8.91749 1.57493L10.3145 4.6036C10.431 4.85624 10.6704 5.0302 10.9467 5.06295L14.2589 5.45566C14.9368 5.53604 15.209 6.37395 14.7078 6.83744L12.2591 9.10196C12.0548 9.29087 11.9634 9.57233 12.0176 9.84522L12.6676 13.1166C12.8006 13.7862 12.0879 14.304 11.4922 13.9706L8.58179 12.3415C8.33901 12.2056 8.04307 12.2056 7.80029 12.3415L4.88989 13.9706C4.29421 14.304 3.58144 13.7862 3.71448 13.1166L4.3645 9.84522C4.41872 9.57233 4.32727 9.29087 4.123 9.10196L1.67426 6.83744C1.17306 6.37394 1.44532 5.53604 2.12323 5.45566L5.43535 5.06295C5.71165 5.0302 5.95107 4.85624 6.06761 4.6036L7.4646 1.57493Z"
                      fill="#67AA8F"
                    />
                  </svg>
                </p>
                <p className="text-neutral-400 font-light uppercase tracking-wider dark:text-neutral-400">
                  {card.designation}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
