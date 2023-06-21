import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 40px;
  cursor: pointer;
  color: white;
`;

export const SwitchSlider = styled.span`
  position: absolute;
  top: 2px;
  left: 0;
  width: 28px;
  height: 16px;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? '#4caf50' : '#e0e0e0')};
  transition: background-color 0.2s ease-in-out;
`;

const SwitchText = styled.span`
  margin-left: 10px;
  color: ${({ isActive }) => (isActive ? '#4caf50' : '#333')};
`;