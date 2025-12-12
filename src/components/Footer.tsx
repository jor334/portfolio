const Footer = () => {
  return (
    <footer className="mt-16 pt-8 pb-4 text-center border-t border-gray-200">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Juan Jose Ortiz Rouille. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
