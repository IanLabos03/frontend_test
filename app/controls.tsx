import Select from "react-select";

type ControlsProps = {
  sortField: string;
  setSortField: (field: string) => void;
  sortDirection: string;
  setSortDirection: (direction: string) => void;
};

const Controls = ({
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
}: ControlsProps) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const handleFieldChange = (selectedOption: any) => {
    setSortField(selectedOption.value);
  };

  const handleDirectionChange = (selectedOption: any) => {
    setSortDirection(selectedOption.value);
  };

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          value={fieldOptions.find((option) => option.value === sortField)}
          onChange={handleFieldChange}
          className="input"
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          value={directionOptions.find(
            (option) => option.value === sortDirection
          )}
          onChange={handleDirectionChange}
          className="input"
        />
      </div>
    </div>
  );
};

export default Controls;
