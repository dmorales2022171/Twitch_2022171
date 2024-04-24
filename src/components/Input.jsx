export const Input = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMenssage,
  validationMessage,
  onBlurHandler,
  textarea,
}) => {
    const handlervalueChange = (event) => { 
        onChangeHandler(event.target.value, field)
    }
    const handlerInputBlur = (event) => { 
        onBlurHandler(event.target.value, field)
    }
    return (
        <>
            <div className="auth-form-label">
                <span>{label}</span>
            </div>
            {textarea ? (
                <textarea
                    type={type}
                    value={value}
                    onchange={handlervalueChange}
                    onBlur={handlerInputBlur}
                    rows={5}
                    style={{maxWidth: '400px'}}
                />
            ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={handlervalueChange}
                        onBlur={ handlerInputBlur}
                    />
            )}
            <span className="auth-form-validations-message">
                { showErrorMenssage && validationMessage}
            </span>
        </>
    )
};
