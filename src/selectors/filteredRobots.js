export default (robots, filters)=>{
  console.log(robots)
  return (robots.filter(
    robot=> {
      return robot.name.toLowerCase().includes(filters.filterText.toLowerCase())
    }
  )
)
}
