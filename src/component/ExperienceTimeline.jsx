import React from "react";

const experiences = [
  {
    company: "SIB Infotech",
    period: "2020–Present",
    role: "Frontend Developer",
    type: "current",
    responsibilities: [
      "Led UI development using React/Next.js",
      "Built responsive web interfaces with Bootstrap/Tailwind",
      "Worked closely with backend & digital marketing teams",
    ],
    icon: "fas fa-code",
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    company: "Meentosys",
    period: "2019–2020",
    role: "Web Designer",
    type: "past",
    responsibilities: [
      "Translated designs to functional sites using HTML/CSS",
      "Managed WordPress customizations",
    ],
    icon: "fas fa-paint-brush",
    color: "from-green-500 to-teal-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    company: "Software Xprts",
    period: "2017–2019",
    role: "Web Designer",
    type: "past",
    responsibilities: [
      "Built static/dynamic client websites",
      "Collaborated on UI feedback loops",
    ],
    icon: "fas fa-users",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
];

const ExperienceTimeline = () => {
  return (
    <div>
      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-green-400 to-orange-400"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            return (
              <div key={exp.company} className="relative group">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300`}
                ></div>

                {/* Content Card */}
                <div className="ml-20 group-hover:translate-x-2 transition-all duration-300">
                  <div
                    className={`${exp.bgColor} ${exp.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${exp.color} rounded-full transform translate-x-16 -translate-y-16`}
                      ></div>
                    </div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg`}
                        >
                          <i className={`${exp.icon} text-white text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {exp.company}
                          </h3>
                          <p className="text-lg font-semibold text-gray-700 mb-2">
                            {exp.role}
                          </p>
                          <div className="flex items-center gap-2 text-gray-500">
                            <i className="fas fa-calendar-alt"></i>
                            <span className="font-medium">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Current Badge */}
                      {exp.type === "current" && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Current
                        </div>
                      )}
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3 relative z-10">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          <i className="fas fa-arrow-right text-gray-400 mt-1 flex-shrink-0"></i>
                          <p className="text-gray-700 leading-relaxed">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6 pt-6 border-t border-gray-200 relative z-10">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>Experience Level</span>
                        <span>
                          {index === 0
                            ? "Senior"
                            : index === 1
                            ? "Intermediate"
                            : "Junior"}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${exp.color} h-2 rounded-full transition-all duration-1000 delay-500`}
                          style={{
                            width:
                              index === 0 ? "90%" : index === 1 ? "70%" : "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Career Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl font-bold text-green-600 mb-2">3</div>
          <div className="text-gray-600">Companies</div>
        </div>
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
          <div className="text-gray-600">Projects Delivered</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
