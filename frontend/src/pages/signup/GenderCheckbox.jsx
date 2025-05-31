const GenderCheckbox = () => {
  return (
    <div className="flex mt-2 gap-4">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Male</span>
            </label>
            <input type="checkbox" className="checkbox ml-2 border-slate-900" />
        </div>

        <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Female</span>
            </label>
            <input type="checkbox" className="checkbox ml-2 border-slate-900" />   
        </div>
    </div>
  )
}
export default GenderCheckbox
