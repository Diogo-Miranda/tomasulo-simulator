import Form from '../styled/Form'
import Styled from 'styled-components'
import Button from '../styled/Button'

const StyledInput = Styled.div``;


type InputProps = {

}

const Input = (props: InputProps) => {
    return (
        <>
            <StyledInput>
                <Form onSubmit={() => null}>
                    <fieldset>
                    <label htmlFor="instruction">Instruction</label>
                    <input
                        defaultValue={1}
                        onChange={() => null}
                        type="string"
                        id="time-quantum"
                        placeholder="ADD rd,rs1,rs2"
                        />
                    </fieldset>

                    <Button>Solve</Button>
                </Form>
            </StyledInput>

        </>
    )
}

export default Input;