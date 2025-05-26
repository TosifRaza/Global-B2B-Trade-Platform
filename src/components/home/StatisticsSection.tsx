import React from 'react';
import CountUp from 'react-countup';

const StatisticsSection: React.FC = () => {
  const stats = [
    { value: 150, label: 'Countries', suffix: '+' },
    { value: 10000, label: 'Verified Suppliers', suffix: '+' },
    { value: 5, label: 'Million Products', suffix: '+' },
    { value: 98, label: 'Satisfaction Rate', suffix: '%' },
  ];

  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <p className="text-teal-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;