import IconGithub from "~icons/simple-icons/github";

export default function Footer() {
  return (
    <footer
      className="mt-4 mb-1 flex w-full items-center justify-center gap-2.5 text-sm ease-in"
      onClick={(e) => e.currentTarget.blur()}
    >
      <a
        href="https://github.com/Kaiyiwing/qwerty-learner"
        target="_blank"
        rel="noreferrer"
        aria-label="前往 GitHub 项目主页"
      >
        <IconGithub
          fontSize={15}
          className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
        />
      </a>

      <span>asd</span>
    </footer>
  );
}
