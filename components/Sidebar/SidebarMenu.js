const SidebarMenu = ({children}) => {

  return (
      <div className="xs:hidden sm:hidden md:block xs:w-fit md:w-3/12">
          <div className="h-fit min-w-30 max-w-full rounded text-white
                          bg-blue-900 dark:bg-gray-400
                          p-4">
              <ul className="flex flex-col gap-6 text-white dark:text-black">
                  {children}
              </ul>
          </div>
      </div>
  )
}


export default SidebarMenu