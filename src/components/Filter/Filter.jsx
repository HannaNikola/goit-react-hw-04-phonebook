import { Title, InputFilter, DivBox } from "./Filter.styled"

export const Filter = ({ filter, onFilterChange }) => {
    return (
        <DivBox>
            <Title>Find contacts by Name</Title>
            <label htmlFor="filter"> </label>
            <InputFilter
                type="text"
                id="filter"
                value={filter}
                onChange={onFilterChange}
            />
        </DivBox>
    )


}
