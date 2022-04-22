import { useState } from "react";
import ComplexLayout from "../components/layouts/ComplexLayout";
import { Button } from "gpl-tailwind-theme";
import { Icon } from "@material-tailwind/react";
import { useRouter } from "../hooks/useRouter";
import RouteListView from "../components/crags/RouteListView";
import Accordion from "../components/shared/Accordion/Accordion";
import Checkbox from "../components/shared/Checkbox/Checkbox";
import cragsTypes from "../types";
import Breadcrumb from "../components/shared/Breadcrumb";

const formatFilters = (arr) => {
  const entriesArr = [...Object.entries(arr)];
  return entriesArr.map(([key, value]) => {
    return {
      name: key,
      value: value,
      isChecked: false,
    };
  });
};

const routesBreadcrumb = [
  {
    name: "ClimbAround",
    icon: "home",
    urlTo: "/",
  },
  {
    name: "Iasi",
    icon: "people",
    urlTo: "/areas/iasi",
  },
  {
    name: "All the routes from Iasi",
    icon: "people",
    urlTo: "#",
  },
];

export default function RouteList() {
  const { query } = useRouter();
  const [gradeFilters] = useState(formatFilters(cragsTypes.GENRE_TYPE));
  const [steepnessFilters] = useState(
    formatFilters(cragsTypes.STEEPNESS_TYPES)
  );
  const [holdFilters] = useState(formatFilters(cragsTypes.HOLD_TYPES));
  const [styleFilters] = useState(formatFilters(cragsTypes.STYLE_TYPES));
  const [gradesFilters] = useState(formatFilters(cragsTypes.GRADES_TYPES));

  const { city } = query;

  const onChangeFilter = (e) => {};
  return (
    <ComplexLayout
      backgroundImage="skills-background"
      title={`All the routes from ${city}`}
      subtitle="Let's climb"
    >
      <Breadcrumb routes={routesBreadcrumb} />
      <Button
        color="green"
        buttonType="link"
        ripple="dark"
        rounded
        className="m-4"
      >
        <Icon family="font-awesome" name="fa-solid fa-plus" size="lg" />
        CREATE ROUTE
      </Button>
      <div className="flex">
        <div className="w-1/5 h-auto p-4">
          <h1 className="text-gray-500">Filters:</h1>
          <Accordion title="Grades">
            <Checkbox options={gradesFilters} onChange={onChangeFilter} />
          </Accordion>
          <Accordion title="Genre">
            <Checkbox options={gradeFilters} onChange={onChangeFilter} />
          </Accordion>
          <Accordion title="Steepness">
            <Checkbox options={steepnessFilters} onChange={onChangeFilter} />
          </Accordion>
          <Accordion title="Hold Types">
            <Checkbox options={holdFilters} onChange={onChangeFilter} />
          </Accordion>
          <Accordion title="Style">
            <Checkbox options={styleFilters} onChange={onChangeFilter} />
          </Accordion>
        </div>
        <div className="w-4/5 border-l-2 border-gray-100  p-4">
          <RouteListView />
        </div>
      </div>
    </ComplexLayout>
  );
}
