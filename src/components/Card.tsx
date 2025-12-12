interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur-sm rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-blue-200/50 hover:border-blue-300">
      {/* Horizontal layout: icon on left, content on right */}
      <div className="flex items-start gap-4">
        {/* Icon container */}
        <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
          <div className="text-2xl">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}