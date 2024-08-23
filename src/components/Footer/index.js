import "./index.css";

export default function Header() {
  return (
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} | Developed by {' '}
        <a 
          href="https://github.com/Kelleou" 
          class="hover:underline me-4 md:me-6"
        >
           Kelleou
        </a>
      </p>
    </footer>
  );
}
