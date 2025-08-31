const Card = ({ 
  children, 
  title, 
  className = '', 
  headerClassName = '', 
  bodyClassName = '',
  ...props 
}) => {
  return (
    <div className={`card ${className}`} {...props}>
      {title && (
        <div className={`border-b border-gray-200 pb-3 mb-4 ${headerClassName}`}>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className={bodyClassName}>
        {children}
      </div>
    </div>
  );
};

export default Card;
