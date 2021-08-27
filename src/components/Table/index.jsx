import React from "react";
import PropTypes from "prop-types";
import { Table as BSTable } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Table = ({ config, data, className, onDragEnd, ...otherProps }) => {
  return (
    <BSTable
      className={`mb-0 text-right ${className ? className : ""}`}
      {...otherProps}
    >
      <thead>
        <tr>
          {config && config.columns.length
            ? config.columns.map(column => (
                <th key={column.accessor} className="bg-white">
                  <span className="">{column.header && column.header}</span>
                </th>
              ))
            : null}
        </tr>
      </thead>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              {data && data.length
                ? data.map((row, i) => (
                    <Draggable key={row.id} draggableId={row.id} index={i}>
                      {(provided, snapshot) => (
                        <tr
                          className="bg-light"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={provided.draggableProps.style}
                        >
                          {config.columns.map(column => (
                            <td key={column.accessor}>
                              {row[column.accessor]}
                            </td>
                          ))}
                        </tr>
                      )}
                    </Draggable>
                  ))
                : null}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </BSTable>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  onDragEnd: PropTypes.func.isRequired,
  config: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string,
        accessor: PropTypes.string,
      })
    ),
  }).isRequired,
};

Table.defaultProps = {};

export default Table;
